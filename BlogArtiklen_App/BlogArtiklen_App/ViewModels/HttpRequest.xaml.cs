using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace BlogArtiklen_App.ViewModels
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class HttpRequest : ContentPage
    {
        public HttpRequest()
        {
            InitializeComponent();
        }
    }
}