'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'
import { readUserData} from '@/supabase/utils'
import { onAuth } from '@/supabase/utils'



export function WithAuth(Component) {
    return () => {
        const { user, userDB, setUserProfile, setUserData } = useUser()
        const router = useRouter()

        useEffect(() => {
            if(user === undefined)onAuth(setUserProfile)
            if(user !== undefined && userDB === '') readUserData('Users', user.uuid, userDB, setUserData, 'data') 
            if(user === null) router.push('/')
            if(user) router.push('/Cliente')

        }, [user])
        
        return (
            <>
                {user === undefined && <Loader />}
                {user && <Component {...arguments} />}
            </>
        )
    }
}