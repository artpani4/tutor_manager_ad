export interface ITelegramUser {
  id: number;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  language_code: string | null;
  is_premium: boolean | null;
  created_at: Date | null;
}
export interface ISupabaseError {
  message: string;
}
