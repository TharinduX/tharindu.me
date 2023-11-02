export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      post_utils: {
        Row: {
          created_at: string
          id: number
          likes: number | null
          post_id: string | null
          views: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          likes?: number | null
          post_id?: string | null
          views?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          likes?: number | null
          post_id?: string | null
          views?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
