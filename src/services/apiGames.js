import supabase from "./supabase";

export async function getGames() {
  const { data, error } = await supabase.from("games").select("*");
  if (error) {
    throw new Error("Game list could not be loaded");
  }
  return data;
}

export async function addGame(game) {
  const { data, error } = await supabase.from("games").insert([game]).select();
  console.log(data);
  if (error) {
    throw new Error("Could not add new game");
  }
  return data;
}

export async function deleteGame(game) {
  console.log(game);
  const { data, error } = await supabase.from("games").delete().eq("id", game);

  if (error) {
    throw new Error("Could not add new game");
  }
  return data;
}
