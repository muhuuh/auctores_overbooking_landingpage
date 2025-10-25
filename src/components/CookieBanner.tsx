import * as CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'; 
import { Trans, useTranslation } from 'react-i18next';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState<boolean | null>(() => {
    const consent = Cookies.get('CookieConsent');
    return consent === 'true' ? true : (consent === 'false' ? false : null);
  });

  useEffect(() => {
    /* Remove sessionStorage check logic
    const shouldShowImmediately = sessionStorage.getItem('showCookieConsentBanner') === 'true';

    if (shouldShowImmediately) {
      sessionStorage.removeItem('showCookieConsentBanner');
      // Ensure consent state is reset if we are forcing the banner open
      setConsentGiven(null); 
      setShowBanner(true);
      return; // Don't proceed to the timeout logic
    }
    */

    // Only show banner if consent hasn't been explicitly given or denied
    if (consentGiven === null) {
       // Delay showing the cookie banner by 1 second
      const timer = setTimeout(() => {
        // Check again before showing, in case consent was given during the delay
        if (Cookies.get('CookieConsent') === undefined) {
           setShowBanner(true);
        }
      }, 1000); // Changed timeout to 1000ms
      return () => clearTimeout(timer);
    } else {
      setShowBanner(false); // Hide banner if consent already exists
    }
  }, [consentGiven]); // Re-run effect if consentGiven changes

   // Function to handle accepting cookies
   const handleAccept = () => {
    console.log("User accepted non-essential cookies");
    // Initialize analytics here if needed
    Cookies.set('CookieConsent', 'true', { expires: 365 });
    setConsentGiven(true);
    setShowBanner(false);
  };

  // Function to handle declining cookies
  const handleDecline = () => {
    console.log("User declined non-essential cookies");
    Cookies.set('CookieConsent', 'false', { expires: 365 });
    setConsentGiven(false);
    setShowBanner(false);
  };

  // Function to be called from Footer to reopen banner
  // This could be exposed via Context or passed down if needed,
  // but for simplicity, Footer will directly remove the cookie for now.

  if (!showBanner) {
    return null;
  }

  return (
    <CookieConsent.default
      location="bottom"
      buttonText={t('cookie.accept')}
      declineButtonText={t('cookie.decline')}
      enableDeclineButton
      cookieName="CookieConsent" // This name must match the one used in js-cookie
      expires={365}
      onAccept={handleAccept}
      onDecline={handleDecline}
      visible={showBanner ? 'visible' : 'hidden'} // Control visibility via state
      style={{
        background: "#1f2937",
        fontSize: "11px",
        borderTop: "1px solid #374151",
        maxWidth: "380px",
        margin: "0 auto",
        left: "0",
        right: "0",
        bottom: "10px",
        borderRadius: "6px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "10px 12px",
        display: "flex",
        flexDirection: "column",
        zIndex: 999,
      }}
      buttonStyle={{
        background: "#3b82f6",
        color: "#fff",
        fontSize: "11px",
        borderRadius: "4px",
        padding: "5px 10px",
        margin: "5px",
        minWidth: "60px",
        display: "inline-block",
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #6b7280",
        color: "#fff",
        fontSize: "11px",
        borderRadius: "4px",
        padding: "5px 10px",
        margin: "5px",
        minWidth: "60px",
        display: "inline-block",
      }}
      contentStyle={{
        flex: "1",
        margin: "0 0 8px 0",
        padding: "0",
        fontSize: "11px",
        lineHeight: "1.3",
      }}
      buttonWrapperClasses="flex justify-end w-full m-0 p-0"
      containerClasses="cookie-container"
      contentClasses="cookie-content"
      ariaAcceptLabel={t('cookie.ariaAccept')}
      ariaDeclineLabel={t('cookie.ariaDecline')}
      // Remove internal handlers if controlling externally
      // onAccept={() => {}}
      // onDecline={() => {}}
      >
      <div style={{ paddingRight: "4px" }}>
        <Trans i18nKey="cookie.message">
          This website uses cookies to enhance the user experience. See our <Link to="/privacy-policy" style={{ color: "#60a5fa", textDecoration: "underline" }}>Privacy Policy</Link> for details.
        </Trans>
      </div>
    </CookieConsent.default>
  );
};

export default CookieBanner; 