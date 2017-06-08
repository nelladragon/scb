// Copyright (C) 2015 Peter Robinson
package com.nelladragon.showertimertalking;

import android.content.Intent;
import android.content.res.Resources;
import android.graphics.Typeface;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import com.facebook.FacebookSdk;
import com.nelladragon.showertimertalking.data.DataHolder;
import com.nelladragon.showertimertalking.data.NonPersistentGlobalData;
import com.nelladragon.common.util.AppVersion;
import com.nelladragon.common.util.Fonts;
import com.nelladragon.common.CommonLib;

import java.util.Date;

/**
 * Display splash screen and do start-up tasks.
 */
public class SplashActivity extends AppCompatActivity {
    // Time to display splash screen in milli-seconds.
    public static final long SPLASH_TIME = 1500;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        final Date start = new Date();
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        // Initialize the SDK before executing any other operations,
        // especially, if you're using Facebook UI elements.
        FacebookSdk.sdkInitialize(getApplicationContext());
        FacebookSdk.setIsDebugEnabled(false);

        Typeface typeFace = Fonts.getDegaws(this.getApplicationContext());
        TextView appTitle1 = (TextView) findViewById(R.id.textViewAppName1);
        appTitle1.setText(R.string.app_name1);
        appTitle1.setTypeface(typeFace);
        TextView appTitle2 = (TextView) findViewById(R.id.textViewAppName2);
        appTitle2.setText(R.string.app_name2);
        appTitle2.setTypeface(typeFace);
        TextView appTitle3 = (TextView) findViewById(R.id.textViewAppName3);
        appTitle3.setText(R.string.app_name3);
        appTitle3.setTypeface(typeFace);

        TextView appVersion = (TextView) findViewById(R.id.textViewVersion);
        Resources res = getResources();
        String verstionText = String.format(res.getString(R.string.version), AppVersion.getVersion(this));
        appVersion.setText(verstionText);


        // Trigger start-up stuff, which could take a while.
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                DataHolder dataHolder = DataHolder.getInstance(SplashActivity.this);
                final boolean firstTimeRun = dataHolder.isFirstTimeRun();
                if (firstTimeRun) {
                    appFirstTimeStartupTasks();
                }
                appStartupTasks();

                long timeRemaining = 1; // Init to a nominal time to force the loop to run once.
                while (timeRemaining > 0) {
                    Date now = new Date();
                    long interval = now.getTime() - start.getTime();
                    timeRemaining = SPLASH_TIME - interval;
                    // If we are within 10ms of the time, then don't bother trying
                    // to sleep for such a small amountof time.
                    if (timeRemaining > 10) {
                        try {
                            Thread.sleep(timeRemaining);
                        } catch (InterruptedException e) {
                            // Do nothing.
                        }
                    }
                }
                //Log.i(LOG_TAG, "ending");
                NonPersistentGlobalData.first = true;
                startActivity(new Intent(SplashActivity.this, MainActivity.class));
                if (firstTimeRun) {
                    // Run the tutorial activity over the top of the main activity.
                    try {
                        Thread.sleep(500); // On Android 6, we need to be sure Main has started before starting Tutorial
                    } catch (InterruptedException e) {
                        // Do nothing.
                    }
                    startActivity(new Intent(SplashActivity.this, TutorialActivity.class));
                }
                finish();

            }
        }, 300);
    }


    private void appFirstTimeStartupTasks() {
    }


    private void appStartupTasks() {
        // Facebook analytics event indicating the app has started.
        //AppEventsLogger.activateApp(this);

//        // Check that facebook token is current.
//        DataHolder dataHolder = DataHolder.getInstance(this.getApplicationContext());
//        String token = dataHolder.getFacebookToken();
//        AccessToken.
//        AccessToken token = new AccessToken(token)


        CommonLib common = CommonLib.getInstance(this);
        common.setFeedbackInfo(new FeedbackInfoImpl(this));
        common.setInAppBillPubkey(getInAppBillPubKey());
    }



    private String getInAppBillPubKey() {
        StringBuffer buf = new StringBuffer();
        buf.append("M");
        buf.append("II");
        buf.append("BIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw/9YK");
        buf.append("lFxlgo9L3h1JcTz7m5NGxqGS0IVyAFZlnT721mgIYW8zRtdNvCSxNmdVd");
        buf.append("WCbU1QJq4c6W/YlHer18p4vedq3PWSGvo0zcDKloNQ0BVaStkXJfTYCpuT7");
        buf.append("haOGKI+Ge");
        buf.append("Z5pf35EvyKKoXkNY9BxBFpL+RMrwmqVsazmnoMlAUF9Jnsv4uNJaSAqeWRjq1cUM9jPqzWgo1pVFcd24P+29RgNr5KCCu7BiycyEsU8rn1OkFXbai2KwrsJu10UR8436pc+G+eJD7igPqfFfOpuGFogc46JKrHFMk7aexEEAaAm5Hv+L84IaeL+kz8bIiXCgdMiues4n9lk7KF7P5rSwIDAQAB");
        return buf.toString();
    }

}
