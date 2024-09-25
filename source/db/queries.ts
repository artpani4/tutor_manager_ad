import luminous from "jsr:@vseplet/luminous@^1.0.5";
import { ISupabaseError, ITelegramUser } from "./interface.ts";
import { supabase } from "../share.ts";

const loggerOptions = new luminous.OptionsBuilder().setName(
  "db/supabase/queries",
)
  .build();
const log = new luminous.Logger(loggerOptions);

export const createTelegramUser = async (
  userData: Partial<ITelegramUser>,
): Promise<[ITelegramUser | null, null | ISupabaseError]> => {
  try {
    const { data, error } = await supabase
      .from("telegram_user")
      .insert([userData]).select().single();

    if (error) throw error;
    return [data as ITelegramUser, null];
  } catch (e) {
    return [null, e as ISupabaseError];
  }
};

export const updateTelegramUser = async (
  id: number,
  userData: Partial<ITelegramUser>,
): Promise<[ITelegramUser | null, null | ISupabaseError]> => {
  try {
    const { data, error } = await supabase
      .from("telegram_user")
      .update(userData)
      .eq("id", id).select().single();

    if (error) throw error;

    return [data as ITelegramUser, null];
  } catch (e) {
    return [null, e as ISupabaseError];
  }
};

export const deleteTelegramUser = async (
  id: number,
): Promise<[ITelegramUser | null, null | ISupabaseError]> => {
  try {
    const { data, error } = await supabase
      .from("telegram_user")
      .delete()
      .eq("id", id).select().single();

    if (error) throw error;

    return [data as ITelegramUser, null];
  } catch (e) {
    return [null, e as ISupabaseError];
  }
};

export const upsertTelegramUser = async (
  userData: Partial<ITelegramUser>,
): Promise<[ITelegramUser | null, null | ISupabaseError]> => {
  try {
    const { data, error } = await supabase
      .from("telegram_user")
      .upsert([userData]).select()
      .single();

    if (error) throw error;
    return [data as ITelegramUser, null];
  } catch (e) {
    return [null, e as ISupabaseError];
  }
};

export const getTelegramUser = async (
  id: number,
): Promise<[ITelegramUser | null, null | ISupabaseError]> => {
  try {
    const { data, error } = await supabase.from("telegram_user")
      .select().eq("id", id).single();
    if (error) throw error;
    return [data as ITelegramUser, null];
  } catch (e) {
    return [null, e as ISupabaseError];
  }
};

export const getTelegramUserByUUID = async (
  uuid: string,
): Promise<[ITelegramUser | null, null | ISupabaseError]> => {
  try {
    const { data, error } = await supabase.from("telegram_user")
      .select().eq("uuid", uuid).single();
    if (error) throw error;
    return [data as ITelegramUser, null];
  } catch (e) {
    return [null, e as ISupabaseError];
  }
};
