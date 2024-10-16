// export default function Todo({task}) {
//     return (
//         <>
//             <li>Task: {task}</li>
//         </>
//     )
// }

// conditional rendering 🙂 
export default function Todo({task,isDone}) {
    if(isDone) {
       return <li>Finished: {task}</li>
    }
    else {
       return <li>Working On: {task}</li>
    }
}