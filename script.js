
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjdGZpb2hmZWd0dGZhcGlhem5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4ODc3ODEsImV4cCI6MTk4MzQ2Mzc4MX0.p_NdRX7tlhnAYxH1v2wSS85C620dxSpEhH-C3jwYBh8";
const url = "https://ectfiohfegttfapiazni.supabase.co";
const database = supabase.createClient(url, key);

const add = document.querySelector("#add");
const deleteList = document.querySelector("#deleteList");
const signupLink = document.querySelector("#signupLink");
const loginLink = document.querySelector("#loginLink");
const login = document.querySelector("#login");
const logout = document.querySelector("#logout");
const signup = document.querySelector("#signup");
const addItems = document.querySelector("#addItems");

const renderItems = async () => {
    let content = document.getElementById("content");
    const res = await database.from("items").select("*");
    if (res) {
        let html = `<ul class="table-view">`;
        let checked;
        res.data.forEach(element => {
            if(element['ticked'] == true){
                checked = 'checked';
            }else{
                checked = '';
            }
            html += `<li class="table-view-cell">${element['name']} <input type='checkbox' class="" onclick="tickItem(${element['id']})" ${checked}></li>`
        });
        html += `</ul>`
        content.innerHTML = html;
        item = "";
    }
}



signupLink.addEventListener("click", async (e) => {
    e.preventDefault();
    login.style.display = 'none';
    addItems.style.display = 'none';
    content.style.display = 'none';
    signup.style.display = 'block';
})

loginLink.addEventListener("click", async (e) => {
    e.preventDefault();
    login.style.display = 'block';
    addItems.style.display = 'none';
    content.style.display = 'none';
    signup.style.display = 'none';
})

login.addEventListener("click", async (e) => {
    e.preventDefault();
    login.style.display = 'none';
    addItems.style.display = 'block';
    content.style.display = 'block';
    deleteList.style.display = 'block';
    logout.style.display = 'block';
    renderItems();
})

logout.addEventListener("click", async (e) => {
    e.preventDefault();
    login.style.display = 'block';
    addItems.style.display = 'none';
    content.style.display = 'none';
    deleteList.style.display = 'none';
    logout.style.display = 'none';
    renderItems();
})

add.addEventListener("click", async (e) => {
    e.preventDefault();
    let item = document.querySelector("#item").value;
    let res = await database.from("items").insert({
        name: item,
    })
    if (res) {
        document.querySelector("#item").value = "";
        renderItems();
    }
})

deleteList.addEventListener("click", async (e) => {
    e.preventDefault();

    let res = await database
    .from("items")
    .delete()
    .eq('ticked', true)
    if (res) {
        renderItems();
    }
})

const tickItem = async (id) => {
    let res = await database
    .from("items")
    .update({
        ticked: true,
    })
    .eq('id', id)
    if (res) {
        renderItems();
    }
}




