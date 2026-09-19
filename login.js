function login(user, pass) {
    if (user === "admin" && pass === "1234") {
        return true;
    }

    return false;
}

function handleLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (login(user, pass)) {
        document.getElementById("result").innerText = "Đăng nhập thành công";
    } else {
        document.getElementById("result").innerText = "Đăng nhập thất bại";
    }
}

// Dùng cho Jest
if (typeof module !== "undefined") {
    module.exports = login;
}
