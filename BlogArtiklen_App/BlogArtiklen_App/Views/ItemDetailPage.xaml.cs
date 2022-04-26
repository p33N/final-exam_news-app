using BlogArtiklen_App.ViewModels;
using System.ComponentModel;
using Xamarin.Forms;

namespace BlogArtiklen_App.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}