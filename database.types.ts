export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      outlines: {
        Row: {
          course_code: string
          course_description: string | null
          course_name: string | null
          id: string
          personnel: Json | null
          schemes: Json | null
        }
        Insert: {
          course_code: string
          course_description?: string | null
          course_name?: string | null
          id?: string
          personnel?: Json | null
          schemes?: Json | null
        }
        Update: {
          course_code?: string
          course_description?: string | null
          course_name?: string | null
          id?: string
          personnel?: Json | null
          schemes?: Json | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          "1A": Json[] | null
          "1B": Json[] | null
          "2A": Json[] | null
          "2B": Json[] | null
          "3A": Json[] | null
          "3B": Json[] | null
          "4A": Json[] | null
          "4B": Json[] | null
          created_at: string | null
          id: string
        }
        Insert: {
          "1A"?: Json[] | null
          "1B"?: Json[] | null
          "2A"?: Json[] | null
          "2B"?: Json[] | null
          "3A"?: Json[] | null
          "3B"?: Json[] | null
          "4A"?: Json[] | null
          "4B"?: Json[] | null
          created_at?: string | null
          id?: string
        }
        Update: {
          "1A"?: Json[] | null
          "1B"?: Json[] | null
          "2A"?: Json[] | null
          "2B"?: Json[] | null
          "3A"?: Json[] | null
          "3B"?: Json[] | null
          "4A"?: Json[] | null
          "4B"?: Json[] | null
          created_at?: string | null
          id?: string
        }
        Relationships: []
      }
      schedules: {
        Row: {
          class_number: number | null
          class_type: string | null
          code: string | null
          course_code: string
          enroll_limit: number | null
          enroll_number: number | null
          friday: boolean | null
          id: string
          monday: boolean | null
          section: number | null
          subject: string | null
          thursday: boolean | null
          time_end: string | null
          time_start: string | null
          tuesday: boolean | null
          waitlist_limit: number | null
          waitlist_number: number | null
          wednesday: boolean | null
        }
        Insert: {
          class_number?: number | null
          class_type?: string | null
          code?: string | null
          course_code: string
          enroll_limit?: number | null
          enroll_number?: number | null
          friday?: boolean | null
          id?: string
          monday?: boolean | null
          section?: number | null
          subject?: string | null
          thursday?: boolean | null
          time_end?: string | null
          time_start?: string | null
          tuesday?: boolean | null
          waitlist_limit?: number | null
          waitlist_number?: number | null
          wednesday?: boolean | null
        }
        Update: {
          class_number?: number | null
          class_type?: string | null
          code?: string | null
          course_code?: string
          enroll_limit?: number | null
          enroll_number?: number | null
          friday?: boolean | null
          id?: string
          monday?: boolean | null
          section?: number | null
          subject?: string | null
          thursday?: boolean | null
          time_end?: string | null
          time_start?: string | null
          tuesday?: boolean | null
          waitlist_limit?: number | null
          waitlist_number?: number | null
          wednesday?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_distinct_column: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
