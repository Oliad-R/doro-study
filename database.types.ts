export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      assessment_groups: {
        Row: {
          count: number
          course_id: string
          drop: number
          id: string
          name: string
          optional: boolean
          type: string
          weight: number
        }
        Insert: {
          count: number
          course_id: string
          drop: number
          id?: string
          name: string
          optional: boolean
          type: string
          weight: number
        }
        Update: {
          count?: number
          course_id?: string
          drop?: number
          id?: string
          name?: string
          optional?: boolean
          type?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "assessment_groups_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "outlines"
            referencedColumns: ["id"]
          },
        ]
      }
      assessments: {
        Row: {
          group_id: string
          id: string
          index: number
          weight: number
        }
        Insert: {
          group_id: string
          id?: string
          index: number
          weight: number
        }
        Update: {
          group_id?: string
          id?: string
          index?: number
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "assessments_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "assessment_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      conditions: {
        Row: {
          course_id: string | null
          group_id: string
          id: string
          lower: string | null
          scheme: number | null
          upper: number | null
        }
        Insert: {
          course_id?: string | null
          group_id: string
          id?: string
          lower?: string | null
          scheme?: number | null
          upper?: number | null
        }
        Update: {
          course_id?: string | null
          group_id?: string
          id?: string
          lower?: string | null
          scheme?: number | null
          upper?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "conditions_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "outlines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conditions_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "assessment_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      enrollments: {
        Row: {
          course_code: string
          course_id: string
          created_at: string
          id: string
          profile: string
          term: string
        }
        Insert: {
          course_code: string
          course_id: string
          created_at?: string
          id?: string
          profile: string
          term: string
        }
        Update: {
          course_code?: string
          course_id?: string
          created_at?: string
          id?: string
          profile?: string
          term?: string
        }
        Relationships: [
          {
            foreignKeyName: "enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "outlines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "enrollments_profile_fkey"
            columns: ["profile"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      grades: {
        Row: {
          assessment_id: string
          grade: number | null
          profile: string
          submitted_at: string | null
        }
        Insert: {
          assessment_id: string
          grade?: number | null
          profile: string
          submitted_at?: string | null
        }
        Update: {
          assessment_id?: string
          grade?: number | null
          profile?: string
          submitted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "grades_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "assessments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grades_profile_fkey"
            columns: ["profile"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      outlines: {
        Row: {
          code: string
          description: string | null
          id: string
          name: string | null
        }
        Insert: {
          code: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          code?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      personnels: {
        Row: {
          course_id: string | null
          email: string | null
          id: string
          name: string | null
          role: string | null
        }
        Insert: {
          course_id?: string | null
          email?: string | null
          id?: string
          name?: string | null
          role?: string | null
        }
        Update: {
          course_id?: string | null
          email?: string | null
          id?: string
          name?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "personnels_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "outlines"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
        }
        Update: {
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
