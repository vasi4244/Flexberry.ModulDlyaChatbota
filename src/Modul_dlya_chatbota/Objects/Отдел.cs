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
    /// Отдел.
    /// </summary>
    // *** Start programmer edit section *** (Отдел CustomAttributes)

    // *** End programmer edit section *** (Отдел CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтделE", new string[] {
            "КодОтдела as \'Код отдела\'",
            "Наименование as \'Наименование\'"})]
    [View("ОтделL", new string[] {
            "КодОтдела as \'Код отдела\'",
            "Наименование as \'Наименование\'"})]
    public class Отдел : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодОтдела;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Отдел CustomMembers)

        // *** End programmer edit section *** (Отдел CustomMembers)

        
        /// <summary>
        /// КодОтдела.
        /// </summary>
        // *** Start programmer edit section *** (Отдел.КодОтдела CustomAttributes)

        // *** End programmer edit section *** (Отдел.КодОтдела CustomAttributes)
        public virtual int КодОтдела
        {
            get
            {
                // *** Start programmer edit section *** (Отдел.КодОтдела Get start)

                // *** End programmer edit section *** (Отдел.КодОтдела Get start)
                int result = this.fКодОтдела;
                // *** Start programmer edit section *** (Отдел.КодОтдела Get end)

                // *** End programmer edit section *** (Отдел.КодОтдела Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отдел.КодОтдела Set start)

                // *** End programmer edit section *** (Отдел.КодОтдела Set start)
                this.fКодОтдела = value;
                // *** Start programmer edit section *** (Отдел.КодОтдела Set end)

                // *** End programmer edit section *** (Отдел.КодОтдела Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Отдел.Наименование CustomAttributes)

        // *** End programmer edit section *** (Отдел.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Отдел.Наименование Get start)

                // *** End programmer edit section *** (Отдел.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Отдел.Наименование Get end)

                // *** End programmer edit section *** (Отдел.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Отдел.Наименование Set start)

                // *** End programmer edit section *** (Отдел.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Отдел.Наименование Set end)

                // *** End programmer edit section *** (Отдел.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтделE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтделE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтделE", typeof(IIS.Modul_dlya_chatbota.Отдел));
                }
            }
            
            /// <summary>
            /// "ОтделL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтделL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтделL", typeof(IIS.Modul_dlya_chatbota.Отдел));
                }
            }
        }
    }
}
