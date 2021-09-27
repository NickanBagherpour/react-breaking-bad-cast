import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/use-axios";
import Layout from "../components/ui/Layout";
import Spinner from "../components/ui/Spinner";
import ApiError from "../components/ui/ApiError";
import classes from "./Profile.module.css";

const Profile = (props) => {
  const { id } = useParams();
  const {
    loading,
    error,
    request: fetchItem,
    results: items,
    // result: item,
  } = useAxios();

  useEffect(() => {
    fetchItem({ url: `characters/${id}` });
  }, [fetchItem, id]);

  let item;
  let content;

  if (items.length === 0) {
    content = (
      <div>
        <h2 className="center">No data found !</h2>
      </div>
    );
  } else {
    item = items[0];
  }

  if (loading) {
    content = <Spinner />;
  }

  if (error) {
    content = (
      <ApiError error={error} onClick={fetchItem} buttonTitle={"Try Again"} />
    );
  }

  if (item) {
    content = (
 
        <div className={classes.card}>
          <img src={item.img} alt="" className={classes.avatar} />

          <p className={classes.title}>{item.name}</p>

          <p className={classes["info-tile"]}>
            <span>Nickname:</span> {item.nickname}
          </p>
          <p className={classes["info-tile"]}>
            <span>Portrayed:</span> {item.portrayed}
          </p>
          <p className={classes["info-tile"]}>
            <span>Birthday:</span> {item.birthday}
          </p>
          <p className={classes["info-tile"]}>
            <span>Status:</span> {item.status}
          </p>
        </div>
 
    );
  }

  return  <Layout>{content}</Layout>;
};

export default Profile;
