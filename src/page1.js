/*import { Page2 } from 'react-router-dom'
import Page2 from "./page2"

function pagina2(){
    document.querySelector(".page1").classList.add("displaynone")
    document.querySelector(".page2").classList.remove("displaynone")
}
*/

export default function Page1(){
    return (
        <div class="page1">
            <img src="./ZapRecall-Recursos/logo.svg" alt="logo" />
            <h1>ZapRecall</h1>
            <button /*onClick={Page2}*/>iniciar Recall!</button>
        </div>
    )
}
