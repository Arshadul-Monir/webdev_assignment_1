function add()
{
    const element = document.getElementById("inp");
    if(element.value == "")
    {
        return;
    }
    const da_list = document.getElementById("list");
    const da_plan = document.createElement("li");

    // const da_delete = document.createElement("button");
    // da_delete.className = "delete-button";
    // da_delete.textContent = "X";
    da_plan.onclick = function() { del(this); };

    da_plan.textContent = element.value;
    // da_plan.appendChild(da_delete);
    da_list.append(da_plan);
    element.value = "";
}

function del(item)
{
    item.remove();
}