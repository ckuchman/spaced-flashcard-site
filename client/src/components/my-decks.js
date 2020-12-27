import React from "react";
import MaterialTable from "material-table";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

export default function MyDecks(props) {
  console.log(`at first, decks is ${JSON.stringify(props.decks)}`);
  /* deck cleaner: cleans decks  */
  let decks = props.decks;

  let tableData = [];
  // decks.forEach((deck, index, obj) => {
  //   const numCards = deck.cards.length;
  //   let showCards = deck.cards.filter((card) => {
  //     console.log("new date is: ", new Date());
  //     console.log("the card's date is:", new Date(card.next_time_to_show));
  //     console.log(
  //       "result of card date <= new date is: ",
  //       new Date(card.next_time_to_show.split(".")[0]) <= new Date()
  //     );
  //     return new Date(card.next_time_to_show.split(".")[0]) <= new Date();
  //   });
  //   console.log(
  //     `this is what my ass got from filtering the deck's cards by date: ${JSON.stringify(
  //       showCards
  //     )}`
  //   );
  //   console.log("the number of cards avail is... ", showCards.length);
  //   const availCards = showCards.length;
  //   deck.cards = showCards;
  //   obj[index] = deck;
  //   console.log(
  //     `before writing table data, numcards is; ${numCards}, availcards is ${availCards}`
  //   );
  //   tableData.push({
  //     deckName: deck.deck_name,
  //     description: deck.deck_description,
  //     numCards: numCards,
  //     available: availCards,
  //     user_deck_id: deck.id,
  //   });
  // });

  console.log(`decks is now: ${JSON.stringify(decks)}`);
  console.log(`table data is: ${JSON.stringify(tableData)}`);

  return (
    <>
      <h1>{props.title}</h1>
      <MaterialTable
        options={{
          ...props.options,
          ...{
            rowStyle: (rowData, index) => {
              if (index % 2) {
                return { backgroundColor: "#f2f2f2" };
              }
            },
            showTitle: false,
            toolbar: false,
            actionsColumnIndex: -1,
            paging: true,
            pageSize: 10,
            emptyRowsWhenPaging: true,
            showSelectAllCheckbox: false,
            search: false,
            sorting: true,
          },
        }}
        columns={[
          { title: "Deck Name", field: "deckName" },
          { title: "Description", field: "description" },
          { title: "Total Cards", field: "numCards", type: "numeric" },
          { title: "Available Cards", field: "available", type: "numeric" },
          { title: "user_deck_id", field: "user_deck_id", hidden: true },
        ]}
        data={tableData}
        title={props.title}
        actions={[
          // {
          //   icon: () => <AddBoxIcon />,
          //   tooltip: "Quick-Add Flashcard!",
          //   onClick: (event, rowData) => {
          //     props.handleAdd;
          //   },
          // },
          {
            icon: () => <OpenInBrowserIcon />,
            tooltip: "Run Deck!",
            onClick: (event, rowData) => {
              props.handleRun(rowData.user_deck_id);
            },
          },
        ]}
      />
    </>
  );
}
