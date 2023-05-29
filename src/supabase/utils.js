import { supabase } from './config'

//--------------------------Authentications----------------------------------

const onAuth = (setUserProfile) => {
    supabase.auth.onAuthStateChange((event, session) => {
        session && readUserData('Users', session.user.id, {}, setUserProfile, null, {uuid: session.user.id, rol: undefined})
        // const uuid = session.user.id
        // readUserData('Users', uuid, user, setUserProfile)
    })
}

const signUpWithEmailAndPassword = async (email, password, setUserProfile) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
}

const signInWithEmailAndPassword = async (email, password, setUserSuccess) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    console.log(data)
    data.user == null && setUserSuccess('AccountNonExist')
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
const readUserData = async (rute, uuid, context, updateContext, key, data) => {
    console.log('active')

    const result = await supabase
        .from(rute)
        .select()
        .eq('uuid', uuid)
    if (result.count !== null) {
        key ? updateContext({ ...context, [rute]: result.data[0] }) : updateContext(result.data[0])
    } else {
        updateContext(data)
    }
}

const updateUserData = async (rute, object, uuid) => {
    const result = await supabase
        .from(rute)
        .update(object)
        .eq('uuid', uuid)
}







export { onAuth, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, writeUserData, readUserData, updateUserData }

