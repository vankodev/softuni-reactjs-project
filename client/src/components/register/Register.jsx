export default function Register() {
    return (
        <div className="register">
            <h1>Register</h1>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
