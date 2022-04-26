using BlogArtiklen_App.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace BlogArtiklen_App.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Register : ContentPage
    {
        public Register()
        {
            InitializeComponent();
            BindingContext = new RegisterViewModel();
        }
    }
    //private void TapGestureRecognizer_Tapped(object sender, EventArgs e)
    //{
    //    Navigation.PushAsync(new LoginPage());
    //}
}