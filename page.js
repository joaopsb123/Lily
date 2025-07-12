import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="container">
      <h1>🎛️ Painel do Bot</h1>
      {!session ? (
        <button onClick={() => signIn('discord')}>
          Login com Discord
        </button>
      ) : (
        <div className="user-info">
          <img src={session.user.image} width="80" />
          <h2>Olá, {session.user.name}!</h2>
          <button onClick={() => signOut()}>Sair</button>
        </div>
      )}
    </div>
  )
}
