
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import InputChat from "../../components/ui/InputChat";

export default function ChatAI () {
    return (
        <section className="chatPath container">
            <article className=" chatContent container">
            <InputChat 
                type='text'
                placeholder='Ask Something'
                id='chatAiInput'
                icon={faMicrophone}
            />
            </article>
        </section>
    )
}