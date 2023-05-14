/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const go = useNavigate();
  const [accountInfo, setAccountInfo] = React.useState({ email: '', password: '' });

  const atChangeInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
      <div className='relative mx-auto w-full max-w-md bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
        <div className='w-full'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-gray-900'>登入</h1>
            <p className='mt-2 text-gray-500'>請輸入註冊的Email和密碼</p>
          </div>
          <div className='mt-5'>
            <form action=''>
              <div className='relative mt-6'>
                <input
                  type='email'
                  name='email'
                  id={accountInfo.email}
                  placeholder='Email Address'
                  className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
                  autoComplete='NA'
                  onChange={(e) => atChangeInput(e)}
                />
                <label
                  htmlFor={accountInfo.email}
                  className='pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
                >
                  帳號
                </label>
              </div>
              <div className='relative mt-6'>
                <input
                  type='password'
                  name='password'
                  id={accountInfo.password}
                  placeholder='Password'
                  className='peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
                  onChange={(e) => atChangeInput(e)}
                />
                <label
                  htmlFor={accountInfo.password}
                  className='pointer-events-none absolute left-0 top-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
                >
                  密碼
                </label>
              </div>
              <div className='my-6'>
                <button
                  type='submit'
                  className='w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none'
                  onClick={() => console.log(accountInfo)}
                >
                  登入
                </button>
              </div>
              <p className='text-center text-sm text-gray-500'>
                還沒有帳號？{' '}
                <span
                  className='cursor-pointer font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none'
                  onClick={() => go('/register')}
                  role='button'
                  tabIndex={-1}
                >
                  註冊
                </span>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
