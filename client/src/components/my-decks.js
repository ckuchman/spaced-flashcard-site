import React from "react";
import MaterialTable from "material-table";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

export default function MyDecks(props) {
  let decks = props.decks;
  let tableData = [];
  decks.forEach((deck) => {
    tableData.push({
      deckName: deck.deck_name,
      description: deck.deck_description,
      numCards: deck.numCards,
      available: deck.availCards,
      user_deck_id: deck.id,
    });
  });

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
          {
            title: "Deck Name",
            field: "deckName",
            cellStyle: { width: 1000, maxWidth: 1000 },
          },
          {
            title: "Description",
            field: "description",
            cellStyle: { width: 1000, maxWidth: 1000 },
          },
          {
            title: "Total Cards",
            field: "numCards",
            type: "numeric",
            cellStyle: { width: 10, maxWidth: 10 },
          },
          {
            title: "Available Cards",
            field: "available",
            type: "numeric",
            cellStyle: { width: 10, maxWidth: 10 },
          },
          { title: "user_deck_id", field: "user_deck_id", hidden: true },
        ]}
        data={tableData}
        title={props.title}
        actions={[
          (rowData) => {
            return rowData.available > 0
              ? {
                  icon: () => <OpenInBrowserIcon />,
                  tooltip: "Run Deck!",
                  onClick: (event, rowData) => {
                    props.handleRun(rowData.user_deck_id);
                  },
                }
              : {
                  hidden: true,
                };
          },
        ]}
      />
    </>
  );
}
