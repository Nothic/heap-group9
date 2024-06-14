import Button from "../components/Button.js";
import LoginWrapper from "../components/LoginWrapper";


export default function Home() {
  return (
      <>
              <main className="h-screen w-screen flex justify-center">
                  <div className="bg-blue-400 rounded h-1/2 p-2">
                  <input
                      className="rounded"
                      id="username" type="text" placeholder="Username"/>
                  <br/>
                  <input
                      className="rounded"
                      id="password" type="password" placeholder="Password"/>
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                      <Button name="Log In"/>
              </div>
                      </div>
          </main>
      </>

  );
}
