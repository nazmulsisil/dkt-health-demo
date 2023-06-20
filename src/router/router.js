import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import MDList from "../pages/md-list";
import ClassActivitiesPage from "../pages/activities/ClassActivitiesPage";
import ProductDetailingPage from "../pages/detailing/ProductDetailing";
import MarketResearchPage from "../pages/research/MarketResearchPage";
import ProductSamplePage from "../pages/samples/ProductSamplePage";
import { JointCall } from "../pages/JointCall";
import { CallSummary } from "../pages/CallSummary";
import { PostCall } from "../pages/PostCall";

export const router = createBrowserRouter([
    { path: "/", Component: Homepage },
    { path: "/md-list", Component: MDList },
    {
        path: "/activities/:activityId",
        Component: ClassActivitiesPage,
    },
    {
        path: "/activities/:activityId/productDetailing",
        Component: ProductDetailingPage,
    },
    {
        path: "/activities/:activityId/marketResearch",
        Component: MarketResearchPage,
    },
    {
        path: "/activities/:activityId/productSamples",
        Component: ProductSamplePage,
    },
    {
        path: "/activities/:activityId/jointCall",
        Component: JointCall,
    },
    {
        path: "/activities/:activityId/callSummary",
        Component: CallSummary,
    },
    {
        path: "/activities/:activityId/postCall",
        Component: PostCall,
    },
]);