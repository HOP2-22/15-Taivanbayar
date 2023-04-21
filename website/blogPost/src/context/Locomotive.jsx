import { createContext } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export const Locomotive = createContext();

export const LocomotiveScrollContext = () => {
  const containerRef = useRef(null);

  return (
    <Locomotive.Provider>
      <LocomotiveScrollProvider
        options={{ smooth: true }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        location
      >
        <main data-scroll-container ref={containerRef}></main>
      </LocomotiveScrollProvider>
    </Locomotive.Provider>
  );
};

export default LocomotiveScrollContext;
