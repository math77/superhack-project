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
      artefact_type: {
        Row: {
          created_at: string
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      artefacts: {
        Row: {
          artefact_type: number | null
          created_at: string
          external_link: string | null
          id: string
          media_id: string | null
          message: string | null
          qolqa_id: string | null
        }
        Insert: {
          artefact_type?: number | null
          created_at?: string
          external_link?: string | null
          id?: string
          media_id?: string | null
          message?: string | null
          qolqa_id?: string | null
        }
        Update: {
          artefact_type?: number | null
          created_at?: string
          external_link?: string | null
          id?: string
          media_id?: string | null
          message?: string | null
          qolqa_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "artefacts_artefact_type_fkey"
            columns: ["artefact_type"]
            referencedRelation: "artefact_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "artefacts_qolqa_id_fkey"
            columns: ["qolqa_id"]
            referencedRelation: "qolqas"
            referencedColumns: ["id"]
          }
        ]
      }
      qolqas: {
        Row: {
          created_at: string
          creator_wallet_addr: string | null
          id: string
          referencial_message: string | null
          referencial_nft_contract_addr: string | null
          referencial_nft_id: string | null
        }
        Insert: {
          created_at?: string
          creator_wallet_addr?: string | null
          id?: string
          referencial_message?: string | null
          referencial_nft_contract_addr?: string | null
          referencial_nft_id?: string | null
        }
        Update: {
          created_at?: string
          creator_wallet_addr?: string | null
          id?: string
          referencial_message?: string | null
          referencial_nft_contract_addr?: string | null
          referencial_nft_id?: string | null
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

