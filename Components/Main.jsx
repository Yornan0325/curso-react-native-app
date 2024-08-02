import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {Logo} from "./Logo";
import { AnimatedGameCard } from "./GameCard";

const gamesData = require("../lib/games.json");

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setGames(gamesData);
  }, []);

  return (
    <View style={{ paddingTop: insets.top,paddingBottom: insets.bottom}}>
      <View style={{marginBottom:20}}>
        <Logo />
      </View>
      {games.length == 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item,index }) =>(  
          <AnimatedGameCard key={item.slug} game={item} index={index}/>
      )}
        />
      )}
    </View>
  );
}
