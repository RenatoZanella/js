.login-form {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
}

.login-header {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
}

.login-header img {
    width: 100px;
}

.login-header h1 {
    color: #333;
    font-size: 1.5em;
}

.login-input {
    border: 2px solid #333;
    border-radius: 8px;
    color: #333;
    font-size: 1em;
    margin-bottom: 15px;
    max-width: 300px;
    outline: none;
    padding: 15px;
    width: 100%;
}

.login-button {
    background-color: #ee665c;
    padding: 15px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 1em;
    max-width: 300px;
    width: 100%;
}

.login-button:disabled {
    background-color: #333;
    color: #aaa;
    cursor: auto;
}