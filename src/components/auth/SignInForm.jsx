'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FormInput from './FormInput';
import SocialButton from './SocialButton';
import Divider from './Divider';
import QHomesLogo from './QHomesLogo';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/i18n';

const SignInForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const { t } = useTranslation(locale);
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.emailOrUsername.trim()) {
      newErrors.emailOrUsername = t('auth.login.errors.emailRequired');
    }

    if (!formData.password) {
      newErrors.password = t('auth.login.errors.passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('auth.login.errors.passwordMinLength');
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      await login(formData.emailOrUsername, formData.password);
    } catch (error) {
      setErrors({
        general: error.message || t('auth.login.errors.invalidCredentials'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setIsLoading(true);
    try {
      // TODO: Implement social authentication
      console.log(`Signing in with ${provider}`);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      setErrors({
        general: t('auth.login.errors.socialLoginFailed').replace(
          '{provider}',
          provider
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickLogin = async (email, password) => {
    setFormData({ emailOrUsername: email, password });
    setErrors({});
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (error) {
      setErrors({
        general: error.message || t('auth.login.errors.loginFailed'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-6 sm:p-8 shadow-2xl'>
      <div className='flex flex-col items-center gap-2 pb-4'>
        <QHomesLogo className='h-12 w-auto' />
        <h1 className='text-charcoal-800 dark:text-background-light text-2xl sm:text-3xl font-bold tracking-tight'>
          {t('auth.login.title')}
        </h1>
        <p className='text-charcoal-500 dark:text-charcoal-300 text-center text-sm'>
          {t('auth.login.subtitle')}
        </p>
      </div>

      {errors.general && (
        <div
          className='w-full p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm flex items-center gap-2'
          role='alert'
        >
          <span className='material-symbols-outlined text-base'>error</span>
          {errors.general}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col items-stretch gap-4'
        noValidate
      >
        <FormInput
          label={t('auth.login.emailOrUsername')}
          type='text'
          name='emailOrUsername'
          placeholder={t('auth.login.emailPlaceholder')}
          icon='User'
          value={formData.emailOrUsername}
          onChange={handleChange}
          error={errors.emailOrUsername}
          required
          autoComplete='username'
          disabled={isLoading}
        />

        <FormInput
          label={t('auth.login.password')}
          type='password'
          name='password'
          placeholder={t('auth.login.passwordPlaceholder')}
          icon='Lock'
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
          autoComplete='current-password'
          disabled={isLoading}
        />

        <div className='w-full text-right pt-1'>
          <Link
            href={`/${locale}/forgot-password`}
            className='text-primary text-sm font-medium leading-normal underline hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded'
            tabIndex={isLoading ? -1 : 0}
          >
            {t('auth.login.forgotPassword')}
          </Link>
        </div>

        <button
          type='submit'
          disabled={isLoading}
          className='flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-charcoal-800 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark mt-4 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? (
            <>
              <span className='material-symbols-outlined animate-spin mr-2'>
                progress_activity
              </span>
              {t('auth.login.signingIn')}
            </>
          ) : (
            t('auth.login.loginButton')
          )}
        </button>
      </form>

      <Divider text={t('auth.login.orDivider')} />

      <div className='flex w-full flex-col gap-3'>
        <SocialButton
          provider='google'
          onClick={() => handleSocialLogin('google')}
          disabled={isLoading}
        >
          {t('auth.login.continueWithGoogle')}
        </SocialButton>

        {/* <SocialButton
          provider='facebook'
          onClick={() => handleSocialLogin('facebook')}
          disabled={isLoading}
        >
          {t('auth.login.continueWithFacebook')}
        </SocialButton> */}
      </div>

      {/* Quick Login Demo Section */}
      <div className='w-full mt-4'>
        <Divider text={t('auth.login.quickLogin')} />
        <div className='grid gap-2 mt-4'>
          <button
            type='button'
            onClick={() => handleQuickLogin('admin@gmail.com', '123@123')}
            disabled={isLoading}
            className='flex items-center justify-between rounded-lg bg-blue-500 hover:bg-blue-600 p-3 text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <span className='text-sm font-medium'>
              {t('auth.login.loginAsAdmin')}
            </span>
            <span className='text-xs opacity-75'>admin@gmail.com</span>
          </button>
          <button
            type='button'
            onClick={() => handleQuickLogin('user@gmail.com', '123@123')}
            disabled={isLoading}
            className='flex items-center justify-between rounded-lg bg-green-500 hover:bg-green-600 p-3 text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <span className='text-sm font-medium'>
              {t('auth.login.loginAsClient')}
            </span>
            <span className='text-xs opacity-75'>user@gmail.com</span>
          </button>
          <button
            type='button'
            onClick={() => handleQuickLogin('partner@gmail.com', '123@123')}
            disabled={isLoading}
            className='flex items-center justify-between rounded-lg bg-purple-500 hover:bg-purple-600 p-3 text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50'
          >
            <span className='text-sm font-medium'>
              {t('auth.login.loginAsPartner')}
            </span>
            <span className='text-xs opacity-75'>partner@gmail.com</span>
          </button>
        </div>
      </div>

      <div className='pt-4 text-center'>
        <p className='text-charcoal-500 dark:text-charcoal-300 text-sm font-normal'>
          {t('auth.login.noAccount')}{' '}
          <Link
            href={`/${locale}/register`}
            className='font-bold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded'
            tabIndex={isLoading ? -1 : 0}
          >
            {t('auth.login.registerNow')}
          </Link>
        </p>
      </div>

      <div className='pt-2 text-center'>
        <Link
          href={`/${locale}`}
          className='text-charcoal-500 dark:text-charcoal-300 text-sm font-normal hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded inline-flex items-center gap-1'
          tabIndex={isLoading ? -1 : 0}
        >
          <ArrowLeft className='h-4 w-4' />
          {t('auth.login.backToHome')}
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
