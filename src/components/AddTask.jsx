import { useState } from "react";

export default function AddTask({onAddTaskSubmit}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); 
    return(
        <div className="space-y-3 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" 
            placeholder="Digite o titulo da tarefa" 
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={title}
            //event handler que dispara sempre que há alteração no campo input e atualiza o estado do título com o valo digitado
            onChange={(event) => setTitle(event.target.value)}/>
            <input type="text" 
            placeholder="Digite a descrição da tarefa"
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            value={description}
            onChange={(event) => setDescription(event.target.value)}/>
            <button onClick={() => {
                // verificar se o titulo e a descrição estão preenchidos
                // || representa o operador lógico "OU" e ! representa a negação
                if (!title.trim() || !description.trim()){
                    return alert("Por favor, preencha o título e a descrição da tarefa.");
                }
                onAddTaskSubmit(title, description)
                setTitle("");
                setDescription("");
            }}
            className="bg-slate-500 text-white px-4 rounded-md font-medium">Adicionar</button>
        </div>
    ); 
}