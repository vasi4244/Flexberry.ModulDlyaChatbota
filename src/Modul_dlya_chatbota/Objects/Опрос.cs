﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Modul_dlya_chatbota
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Опрос.
    /// </summary>
    // *** Start programmer edit section *** (Опрос CustomAttributes)

    // *** End programmer edit section *** (Опрос CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОпросE", new string[] {
            "КодОпр as \'Код опр\'",
            "Название as \'Название\'"})]
    [View("ОпросL", new string[] {
            "КодОпр as \'Код опр\'",
            "Название as \'Название\'"})]
    public class Опрос : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодОпр;
        
        private string fНазвание;
        
        // *** Start programmer edit section *** (Опрос CustomMembers)

        // *** End programmer edit section *** (Опрос CustomMembers)

        
        /// <summary>
        /// КодОпр.
        /// </summary>
        // *** Start programmer edit section *** (Опрос.КодОпр CustomAttributes)

        // *** End programmer edit section *** (Опрос.КодОпр CustomAttributes)
        public virtual int КодОпр
        {
            get
            {
                // *** Start programmer edit section *** (Опрос.КодОпр Get start)

                // *** End programmer edit section *** (Опрос.КодОпр Get start)
                int result = this.fКодОпр;
                // *** Start programmer edit section *** (Опрос.КодОпр Get end)

                // *** End programmer edit section *** (Опрос.КодОпр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Опрос.КодОпр Set start)

                // *** End programmer edit section *** (Опрос.КодОпр Set start)
                this.fКодОпр = value;
                // *** Start programmer edit section *** (Опрос.КодОпр Set end)

                // *** End programmer edit section *** (Опрос.КодОпр Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Опрос.Название CustomAttributes)

        // *** End programmer edit section *** (Опрос.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Опрос.Название Get start)

                // *** End programmer edit section *** (Опрос.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Опрос.Название Get end)

                // *** End programmer edit section *** (Опрос.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Опрос.Название Set start)

                // *** End programmer edit section *** (Опрос.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Опрос.Название Set end)

                // *** End programmer edit section *** (Опрос.Название Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОпросE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОпросE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОпросE", typeof(IIS.Modul_dlya_chatbota.Опрос));
                }
            }
            
            /// <summary>
            /// "ОпросL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОпросL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОпросL", typeof(IIS.Modul_dlya_chatbota.Опрос));
                }
            }
        }
    }
}
