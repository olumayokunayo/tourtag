import React from "react";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/FormElements/Button";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            title={place.title}
            description={place.description}
            image={place.imageUrl}
            address={place.address}
            coordinates={place.location}
            creatorId={place.creator}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
