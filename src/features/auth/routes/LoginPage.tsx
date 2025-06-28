import { useAuth } from '../store/useAuthStore';
import { type FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import '@/assets/styles/LoginPage.css';

export function LoginPage() {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await login({ email, password });
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  } as const;

  const illustrationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  } as const;

  return (
    <div className="login-page-container">
      <motion.main
        className="login-main-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="login-form-panel"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="logo-container">
            <img src="/assets/torra-logo.svg" alt="Lojas Torra" />
          </div>

          <h1 className="heading">Entrar no Painel</h1>

          <form onSubmit={handleSubmit}>
            <div className="login-input-group">
              <div className="login-input-wrapper">
                <div className="icon-container">
                  <img
                    src="/assets/user-icon.svg"
                    alt="User Icon"
                    className="icon"
                  />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="login-input-wrapper">
                <div className="icon-container">
                  <img
                    src="/assets/lock-icon.svg"
                    alt="Lock Icon"
                    className="icon"
                  />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <motion.button
              type="submit"
              className="login-button"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? 'Acessando...' : 'Acessar'}
            </motion.button>
          </form>

          <div className="login-rescue-link">
            <span>Não se lembra da sua senha? </span>
            <a href="#">Resgate aqui</a>
          </div>
        </motion.div>

        <motion.div
          className="login-illustration-panel"
          variants={illustrationVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="illustration-logo-container">
            <img
              src="/assets/click-and-collect-logo.svg"
              alt="Clique e Retire"
            />
          </div>
          <div className="illustration-container">
            <motion.img
              src="/assets/girl-avatar.svg"
              alt="Illustration Girl"
              className="menina"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            />
            <motion.img
              src="/assets/boy-avatar.svg"
              alt="Illustration Boy"
              className="menino"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </motion.main>
      <footer className="login-footer">
        <p>Copyright © 2023, Lojas Torra. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
