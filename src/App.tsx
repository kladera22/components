import { BrowserRouter, Routes, Route } from "react-router-dom";

import BaseTheme2 from "./DesignSytem/BaseTheme2";
import DesignSystemTwo from "./DesignSytem/DesignSystemTwo";
import DesignSystemThree from "./DesignSytem/DesignSystemThree";
import DesignSystemOne from "./DesignSytem/DesignSystemOne";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/base-theme" element={<BaseTheme2 />} />
                <Route path="/one" element={<DesignSystemOne />} />
                <Route path="/two" element={<DesignSystemTwo />} />
                <Route path="/three" element={<DesignSystemThree />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
