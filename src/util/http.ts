interface loginData {
  email: string;
  password: string;
}
export async function ForgetPasswordApi(email: string) {
  try {
    const response = await fetch(
      `https://run.mocky.io/v3/a731d6fb-9992-4129-975c-d90d0b567705`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function LoginApi(loginData: loginData) {
  try {
    const response = await fetch(
      `https://run.mocky.io/v3/a731d6fb-9992-4129-975c-d90d0b567705`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function getUsers() {
  try {
    const response = await fetch(
      `https://run.mocky.io/v3/499508ce-5606-4afc-8106-794a6ff043c0`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}
export async function getUser(id: number) {
  try {
    const response = await fetch(
      `https://run.mocky.io/v3/414f3936-c92e-46a0-a3e7-292a006a9710`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function getDashboard() {
  try {
    const response = await fetch(
      `https://run.mocky.io/v3/c00fe8c5-16a0-4987-a01f-4fe4f063e6a1`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
