// import { useAuth } from "@clerk/clerk-expo";
// import { Redirect } from "expo-router";

// const Page = () => {
//     const { isSignedIn } = useAuth();

//     if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

//     return <Redirect href="/(auth)/welcome" />;
// };

// export default Page;

import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Page = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isLoaded || !isReady) return; // Ensure everything is loaded before redirecting

    if (isSignedIn) {
      router.replace("/(root)/(tabs)/home");
    } else {
      router.replace("/(auth)/welcome");
    }
  }, [isLoaded, isSignedIn, isReady]);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return null;
};

export default Page;
