import { supabase } from './config'

//--------------------------Authentications----------------------------------

const onAuth = (setUserProfile) => {
    supabase.auth.onAuthStateChange((event, session) => {
        readUserData('Users', session.user.id, {}, setUserProfile, null)
        // const uuid = session.user.id
        // readUserData('Users', uuid, user, setUserProfile)
      })
}

const signUpWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
}

const signInWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
}

const signOut = async (email, password) => {
    const { error } = await supabase.auth.signOut()
}

//--------------------------CRUD----------------------------------

const writeUserData = async (rute, object) => {
    const result = await supabase
    .from(rute)
    .insert(object)
}
const readUserData = async (rute, uuid, context, updateContext, key) => {
    const result = await supabase
    .from(rute)
    .select()
    .eq('uuid', uuid)
    key ? updateContext({...context, [rute]: result.data[0]}) : updateContext(result.data[0]) 
}

const updateUserData = async (rute, object, uuid) => {
    const result = await supabase
    .from(rute)
    .update(object)
    .eq('uuid', uuid)
}







export { onAuth, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, writeUserData, readUserData, updateUserData}

