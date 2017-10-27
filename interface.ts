interface  ToDoList
{
    ToDoName: string,
    ToDoStatus :string
}

class ToDoClass
{
    public todoArray: ToDoList[];
    constructor()
    {
        this.todoArray = [];
    }
    add(list : ToDoList)
    {
        this.todoArray.push(list);
        //console.log(this.todoArray)
    }

    display()
    {
        this.todoArray.forEach(function (i) {
            if(i.ToDoStatus != "DELETED")
                console.log("success");
        })
    }

    EditTitle(id, newValue)
    {
        this.todoArray[id].ToDoStatus = newValue;
    }

    MarkTaskAsCompleted(taskID)
    {
        this.todoArray[taskID].ToDoStatus = "COMPLETED";
    }

    DeleteATask(taskID)
    {
        this.todoArray[taskID].ToDoStatus = "DELETED";
    }
}

var list = new ToDoClass();

function AddTaskInTodoArray(TaskName,TaskStatus)
{

    list.add({
        ToDoName: TaskName,
        ToDoStatus :TaskStatus
    })

}

function editItem(id:number, value:string)
{
    list.EditTitle(id, value);
}


function MarkTaskAsCompletedExport(taskID:Number)
{
    list.MarkTaskAsCompleted(taskID);
}

function DeleteATaskExport(taskID)
{
    list.DeleteATask(taskID);
}
