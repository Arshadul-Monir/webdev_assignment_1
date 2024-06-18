function add()
{
    const element = document.getElementById("inp");
    const da_list = document.getElementById("list");
    const da_plan = document.createElement("li");

    const da_delete = document.createElement("button");
    da_delete.textContent = "deeleet";
    da_delete.onclick = function() { del(this); };

    da_plan.textContent = element.value + " ";
    da_plan.append(da_delete);
    da_list.append(da_plan);
    element.value = "";
}

function del(item)
{
    item.parentElement.remove();
}