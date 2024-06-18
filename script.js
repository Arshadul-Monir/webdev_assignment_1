function add(index)
{
    let da_list = document.getElementById("list");
    let da_plan = document.createElement("li");
    da_plan.textContent = index;
    da_list.append(da_plan);
}