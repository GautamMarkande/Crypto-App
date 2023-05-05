export const coinObject = (setState,data) => {
    setState({
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image.large,
      desc: data.description.en,
      price_change_percentage_24h:data.market_data
    });
}