// import api from '../config/api';

import axios from 'axios';

type LoginProps = {
  email: string;
  password: string;
};

type LoginResponse = {
  status: boolean;
  message: string;
};

class Authentication {
  async login({ email, password }: LoginProps): Promise<void> {
    console.log({ email, password });
    try {
      const res = await axios.post('http://172.19.208.1:3333/sessions', {
        email,
        password,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Authentication();
