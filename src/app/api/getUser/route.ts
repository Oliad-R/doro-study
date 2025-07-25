import { User } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { createClient } from "@/../utils/supabase/client";

const supabase = createClient();

export async function GET(){
    try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.error("Error fetching user", error.message);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        if (!data || !data.user) {
            console.error("No user found");
            return NextResponse.json({ error: "No user found" }, { status: 404 });
        }

        registerNewUser(data.user);

        console.log("Successful Login!");
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error("Internal Server Error");
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}

async function registerNewUser(user: User){
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select("*")
            .eq('id', user.id);

        if (error) {
            console.error("Error fetching user data", error.message);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        console.log("FETCHED USER DATA: ", data[0]);

        if (!data[0] || !data){
            try {
                await supabase
                    .from('profiles')
                    .insert({ 'id': user.id , 'selected_courses': [{}, {}, {}, {}, {}, {}]})

                console.log("Successfully inserted new user to table!")
                return NextResponse.json({ error: null }, { status: 200 });
            } catch (error) {
                console.error("Internal Server Error");
                return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
            }
        } else {
            console.log("User already inserted in table")
            return NextResponse.json({ error: null }, { status: 200 });
        }

    } catch (error){
        console.error("Internal Server Error");
        return NextResponse.json({error: error}, {status: 500});
    }
}
