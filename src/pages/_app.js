import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const theme = {
    colors: {
      white: 'rgba(240,247,255,1)',
      navyBlue: 'rgba(2,12,27,1)',
      lightNavyBlue: 'rgba(4,22,48,1)',
      green: 'rgba(0,206,158,1)',
      orange: 'rgba(249,105,14,1)',
      purple: 'rgba(102,51,153,1)',
      darkGold: 'rgb(155, 133, 26)',
      lightGold: 'rgb(250, 224, 92)',
      veryLightGold: 'rgb(252, 233, 135)',
    },
  };
  return (
    <div>
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
