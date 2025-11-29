## Analyze login approaches

### Purpose of `userSchema.statics.login`

- Encapsulates login logic in the model
- Returns user object if credentials are correct
- Keeps controllers clean

### `User.findOne({ email })` vs `this.findOne({ email })`

- `User.findOne` is explicit and works anywhere
- `this.findOne` is used inside static methods; refers dynamically to the model

### Bcrypt import location

- Iterations 1–5: in model
- V2: in controller
- Import in model preferred for encapsulated logic; in controller is explicit but increases coupling

### Chosen approach

- Use static methods in model for login
- Keep bcrypt logic inside model
- Controllers only call `User.login(email, password)` and handle request/response

**Reason:** clean MVC separation, reusable logic, easier maintenance, secure and testable.
