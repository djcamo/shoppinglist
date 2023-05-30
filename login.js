const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjdGZpb2hmZWd0dGZhcGlhem5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc4ODc3ODEsImV4cCI6MTk4MzQ2Mzc4MX0.p_NdRX7tlhnAYxH1v2wSS85C620dxSpEhH-C3jwYBh8";
const url = "https://ectfiohfegttfapiazni.supabase.co";
const database = supabase.createClient(url, key);

let login = document.querySelector("#login");
login.addEventListener("click", async (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    let pwd = document.querySelector("#password").value;

    let res = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (res) {
        alert('logged in');
    }
})