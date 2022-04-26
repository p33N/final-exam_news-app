using BlogArtiklen_App.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Windows.Input;
using Xamarin.Forms;

namespace BlogArtiklen_App.ViewModels
{
    public class RegisterViewModel : INotifyPropertyChanged
    {
        public User user { get; } = new User();
        public RegisterViewModel()
        {
            PostUser = new Command(AddUser);
        }

        public ICommand PostUser { get; }

        public event PropertyChangedEventHandler PropertyChanged;

        void OnPropertyChanged(string name) =>
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));

        public void AddUser()
        {
            //add to database!
            user.ClearFields();
        }
    }
}