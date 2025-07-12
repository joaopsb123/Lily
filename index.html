import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="container">
      <h1>🎛️ Painel de Controle do Bot</h1>
      
      {!session ? (
        <button onClick={() => signIn("discord")}>Login com Discord</button>
      ) : (
        <>
          <div className="user-info">
            <img src={session.user?.image!} alt="User Avatar" width={80} height={80} />
            <h2>Bem-vindo, {session.user?.name}!</h2>
            <p>Email: {session.user?.email}</p>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </>
      )}
    </div>
  );
}
