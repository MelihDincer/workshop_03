export default function Summary({items}) {
    const itemsCount = items.length;
    const completedItemsCount = items.filter(item => item.completed).length;
  
    return (
      <footer className="summary">
        {itemsCount === 0 ? <p>Alışveriş listenizi hazırlamaya başlayabilirsiniz.☺️</p> : (
        itemsCount === completedItemsCount ?
        (<p>Alışverişinizi tamamladınız.😍</p>) : (<p>Alışveriş sepetinizde {itemsCount} üründen {completedItemsCount} tanesini satın almış bulunmaktasınız.</p>))}
        </footer>
    );
  }