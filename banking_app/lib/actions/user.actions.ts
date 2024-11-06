'use server';

import { cookies } from "next/headers";
import { createSessionClient } from "../appwrite";
import path from "path";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const signIn = async () => {

  try{
    // Mutation / Database / Make fetch
  }catch(error){
    console.error("Error" ,error)
  }
}

export const signUp = async (userData:SignUpParams) => {
  const {email,password,firstName,lastName} = userData;
  try{
    const {account} = await createSessionClient();
    const newUSerAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`);

    const session = await account.createEmailPasswordSession(email,password);

    (await cookies()).set("appwrite-session",session.secret, {
      path: "/",
      httpOnly: true,
      sameSite:"strict",
      secure :process.env.NODE_ENV === "production",
  });
  return parseStringify(newUSerAccount)
  }catch(error){
    console.error("Error" ,error)
  }
}


export async function getLoggedInUser() {
  try {
    const {account} = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}