import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/ui/Layout";

const Profile = () => {
  const { id } = useParams();

  return (
      <Layout>
           <p>Profile {id}</p>
      </Layout>
  );
};

export default Profile;
